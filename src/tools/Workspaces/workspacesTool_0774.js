/**
 * Generated Tool: workspacesTool_0774
 * Domain: Workspaces
 * ID: 0774
 */
exports.workspacesTool_0774 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0774:', error);
    throw error;
  }
};
