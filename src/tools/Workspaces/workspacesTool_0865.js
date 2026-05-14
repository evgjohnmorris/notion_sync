/**
 * Generated Tool: workspacesTool_0865
 * Domain: Workspaces
 * ID: 0865
 */
exports.workspacesTool_0865 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0865:', error);
    throw error;
  }
};
