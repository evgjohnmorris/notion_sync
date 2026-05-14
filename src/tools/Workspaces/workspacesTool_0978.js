/**
 * Generated Tool: workspacesTool_0978
 * Domain: Workspaces
 * ID: 0978
 */
exports.workspacesTool_0978 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0978:', error);
    throw error;
  }
};
