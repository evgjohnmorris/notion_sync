/**
 * Generated Tool: workspacesTool_0427
 * Domain: Workspaces
 * ID: 0427
 */
exports.workspacesTool_0427 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0427:', error);
    throw error;
  }
};
