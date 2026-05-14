/**
 * Generated Tool: workspacesTool_0174
 * Domain: Workspaces
 * ID: 0174
 */
exports.workspacesTool_0174 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0174:', error);
    throw error;
  }
};
