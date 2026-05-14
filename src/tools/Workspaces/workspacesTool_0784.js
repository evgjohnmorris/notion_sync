/**
 * Generated Tool: workspacesTool_0784
 * Domain: Workspaces
 * ID: 0784
 */
exports.workspacesTool_0784 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0784:', error);
    throw error;
  }
};
