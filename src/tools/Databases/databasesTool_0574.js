/**
 * Generated Tool: databasesTool_0574
 * Domain: Databases
 * ID: 0574
 */
exports.databasesTool_0574 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0574:', error);
    throw error;
  }
};
