/**
 * Generated Tool: workspacesTool_0227
 * Domain: Workspaces
 * ID: 0227
 */
exports.workspacesTool_0227 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0227:', error);
    throw error;
  }
};
