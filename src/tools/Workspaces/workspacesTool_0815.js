/**
 * Generated Tool: workspacesTool_0815
 * Domain: Workspaces
 * ID: 0815
 */
exports.workspacesTool_0815 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0815:', error);
    throw error;
  }
};
