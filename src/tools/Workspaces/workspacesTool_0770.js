/**
 * Generated Tool: workspacesTool_0770
 * Domain: Workspaces
 * ID: 0770
 */
exports.workspacesTool_0770 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0770:', error);
    throw error;
  }
};
