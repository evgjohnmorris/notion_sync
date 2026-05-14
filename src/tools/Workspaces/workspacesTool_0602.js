/**
 * Generated Tool: workspacesTool_0602
 * Domain: Workspaces
 * ID: 0602
 */
exports.workspacesTool_0602 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0602:', error);
    throw error;
  }
};
