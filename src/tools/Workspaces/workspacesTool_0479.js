/**
 * Generated Tool: workspacesTool_0479
 * Domain: Workspaces
 * ID: 0479
 */
exports.workspacesTool_0479 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0479:', error);
    throw error;
  }
};
