/**
 * Generated Tool: workspacesTool_0114
 * Domain: Workspaces
 * ID: 0114
 */
exports.workspacesTool_0114 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0114:', error);
    throw error;
  }
};
