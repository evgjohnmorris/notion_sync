/**
 * Generated Tool: workspacesTool_0260
 * Domain: Workspaces
 * ID: 0260
 */
exports.workspacesTool_0260 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0260:', error);
    throw error;
  }
};
