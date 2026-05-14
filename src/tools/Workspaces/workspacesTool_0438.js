/**
 * Generated Tool: workspacesTool_0438
 * Domain: Workspaces
 * ID: 0438
 */
exports.workspacesTool_0438 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0438:', error);
    throw error;
  }
};
