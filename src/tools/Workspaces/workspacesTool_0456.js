/**
 * Generated Tool: workspacesTool_0456
 * Domain: Workspaces
 * ID: 0456
 */
exports.workspacesTool_0456 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0456:', error);
    throw error;
  }
};
