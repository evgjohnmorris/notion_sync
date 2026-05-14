/**
 * Generated Tool: workspacesTool_0898
 * Domain: Workspaces
 * ID: 0898
 */
exports.workspacesTool_0898 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0898:', error);
    throw error;
  }
};
