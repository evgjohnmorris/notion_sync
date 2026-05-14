/**
 * Generated Tool: workspacesTool_0017
 * Domain: Workspaces
 * ID: 0017
 */
exports.workspacesTool_0017 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0017:', error);
    throw error;
  }
};
