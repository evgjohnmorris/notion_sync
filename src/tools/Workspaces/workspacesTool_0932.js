/**
 * Generated Tool: workspacesTool_0932
 * Domain: Workspaces
 * ID: 0932
 */
exports.workspacesTool_0932 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0932:', error);
    throw error;
  }
};
