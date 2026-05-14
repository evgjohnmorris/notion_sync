/**
 * Generated Tool: workspacesTool_0032
 * Domain: Workspaces
 * ID: 0032
 */
exports.workspacesTool_0032 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0032:', error);
    throw error;
  }
};
