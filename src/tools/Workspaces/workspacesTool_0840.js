/**
 * Generated Tool: workspacesTool_0840
 * Domain: Workspaces
 * ID: 0840
 */
exports.workspacesTool_0840 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0840:', error);
    throw error;
  }
};
