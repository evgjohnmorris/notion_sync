/**
 * Generated Tool: workspacesTool_0183
 * Domain: Workspaces
 * ID: 0183
 */
exports.workspacesTool_0183 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0183:', error);
    throw error;
  }
};
