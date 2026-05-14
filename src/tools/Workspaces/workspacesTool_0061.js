/**
 * Generated Tool: workspacesTool_0061
 * Domain: Workspaces
 * ID: 0061
 */
exports.workspacesTool_0061 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0061:', error);
    throw error;
  }
};
