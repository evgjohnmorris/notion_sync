/**
 * Generated Tool: workspacesTool_0959
 * Domain: Workspaces
 * ID: 0959
 */
exports.workspacesTool_0959 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0959:', error);
    throw error;
  }
};
