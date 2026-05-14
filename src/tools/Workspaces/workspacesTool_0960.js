/**
 * Generated Tool: workspacesTool_0960
 * Domain: Workspaces
 * ID: 0960
 */
exports.workspacesTool_0960 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0960:', error);
    throw error;
  }
};
