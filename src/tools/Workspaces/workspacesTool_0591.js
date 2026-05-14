/**
 * Generated Tool: workspacesTool_0591
 * Domain: Workspaces
 * ID: 0591
 */
exports.workspacesTool_0591 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0591:', error);
    throw error;
  }
};
