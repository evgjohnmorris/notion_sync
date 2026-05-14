/**
 * Generated Tool: workspacesTool_0913
 * Domain: Workspaces
 * ID: 0913
 */
exports.workspacesTool_0913 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0913:', error);
    throw error;
  }
};
