/**
 * Generated Tool: workspacesTool_0733
 * Domain: Workspaces
 * ID: 0733
 */
exports.workspacesTool_0733 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0733:', error);
    throw error;
  }
};
