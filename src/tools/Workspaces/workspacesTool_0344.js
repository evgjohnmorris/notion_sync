/**
 * Generated Tool: workspacesTool_0344
 * Domain: Workspaces
 * ID: 0344
 */
exports.workspacesTool_0344 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0344:', error);
    throw error;
  }
};
