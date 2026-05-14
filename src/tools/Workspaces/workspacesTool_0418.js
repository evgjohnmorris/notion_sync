/**
 * Generated Tool: workspacesTool_0418
 * Domain: Workspaces
 * ID: 0418
 */
exports.workspacesTool_0418 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0418:', error);
    throw error;
  }
};
