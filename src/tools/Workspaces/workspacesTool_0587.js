/**
 * Generated Tool: workspacesTool_0587
 * Domain: Workspaces
 * ID: 0587
 */
exports.workspacesTool_0587 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0587:', error);
    throw error;
  }
};
