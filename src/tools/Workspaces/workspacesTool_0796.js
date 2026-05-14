/**
 * Generated Tool: workspacesTool_0796
 * Domain: Workspaces
 * ID: 0796
 */
exports.workspacesTool_0796 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0796:', error);
    throw error;
  }
};
