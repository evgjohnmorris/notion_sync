/**
 * Generated Tool: workspacesTool_0976
 * Domain: Workspaces
 * ID: 0976
 */
exports.workspacesTool_0976 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0976:', error);
    throw error;
  }
};
