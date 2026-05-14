/**
 * Generated Tool: workspacesTool_0480
 * Domain: Workspaces
 * ID: 0480
 */
exports.workspacesTool_0480 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0480:', error);
    throw error;
  }
};
