/**
 * Generated Tool: workspacesTool_0830
 * Domain: Workspaces
 * ID: 0830
 */
exports.workspacesTool_0830 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0830:', error);
    throw error;
  }
};
