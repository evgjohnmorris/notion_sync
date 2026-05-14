/**
 * Generated Tool: workspacesTool_0222
 * Domain: Workspaces
 * ID: 0222
 */
exports.workspacesTool_0222 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0222:', error);
    throw error;
  }
};
