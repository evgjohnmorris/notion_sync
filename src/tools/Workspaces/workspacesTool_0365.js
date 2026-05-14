/**
 * Generated Tool: workspacesTool_0365
 * Domain: Workspaces
 * ID: 0365
 */
exports.workspacesTool_0365 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0365:', error);
    throw error;
  }
};
