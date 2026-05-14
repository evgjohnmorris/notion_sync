/**
 * Generated Tool: workspacesTool_0097
 * Domain: Workspaces
 * ID: 0097
 */
exports.workspacesTool_0097 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0097:', error);
    throw error;
  }
};
