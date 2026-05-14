/**
 * Generated Tool: workspacesTool_0393
 * Domain: Workspaces
 * ID: 0393
 */
exports.workspacesTool_0393 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0393:', error);
    throw error;
  }
};
