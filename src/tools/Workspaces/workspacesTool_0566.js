/**
 * Generated Tool: workspacesTool_0566
 * Domain: Workspaces
 * ID: 0566
 */
exports.workspacesTool_0566 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0566:', error);
    throw error;
  }
};
