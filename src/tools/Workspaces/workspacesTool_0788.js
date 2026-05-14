/**
 * Generated Tool: workspacesTool_0788
 * Domain: Workspaces
 * ID: 0788
 */
exports.workspacesTool_0788 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0788:', error);
    throw error;
  }
};
