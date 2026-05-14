/**
 * Generated Tool: workspacesTool_0401
 * Domain: Workspaces
 * ID: 0401
 */
exports.workspacesTool_0401 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0401:', error);
    throw error;
  }
};
