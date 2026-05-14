/**
 * Generated Tool: workspacesTool_0857
 * Domain: Workspaces
 * ID: 0857
 */
exports.workspacesTool_0857 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0857:', error);
    throw error;
  }
};
