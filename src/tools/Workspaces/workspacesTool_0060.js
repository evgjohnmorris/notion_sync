/**
 * Generated Tool: workspacesTool_0060
 * Domain: Workspaces
 * ID: 0060
 */
exports.workspacesTool_0060 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0060:', error);
    throw error;
  }
};
