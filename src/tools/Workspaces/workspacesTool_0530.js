/**
 * Generated Tool: workspacesTool_0530
 * Domain: Workspaces
 * ID: 0530
 */
exports.workspacesTool_0530 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0530:', error);
    throw error;
  }
};
