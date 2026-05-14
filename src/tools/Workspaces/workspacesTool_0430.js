/**
 * Generated Tool: workspacesTool_0430
 * Domain: Workspaces
 * ID: 0430
 */
exports.workspacesTool_0430 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0430:', error);
    throw error;
  }
};
