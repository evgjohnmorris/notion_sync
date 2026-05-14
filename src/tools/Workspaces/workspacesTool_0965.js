/**
 * Generated Tool: workspacesTool_0965
 * Domain: Workspaces
 * ID: 0965
 */
exports.workspacesTool_0965 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0965:', error);
    throw error;
  }
};
