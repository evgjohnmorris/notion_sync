/**
 * Generated Tool: workspacesTool_0437
 * Domain: Workspaces
 * ID: 0437
 */
exports.workspacesTool_0437 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0437:', error);
    throw error;
  }
};
