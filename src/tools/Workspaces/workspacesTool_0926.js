/**
 * Generated Tool: workspacesTool_0926
 * Domain: Workspaces
 * ID: 0926
 */
exports.workspacesTool_0926 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0926:', error);
    throw error;
  }
};
