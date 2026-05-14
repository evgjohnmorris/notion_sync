/**
 * Generated Tool: workspacesTool_0461
 * Domain: Workspaces
 * ID: 0461
 */
exports.workspacesTool_0461 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0461:', error);
    throw error;
  }
};
