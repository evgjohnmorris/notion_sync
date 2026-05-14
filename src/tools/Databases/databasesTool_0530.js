/**
 * Generated Tool: databasesTool_0530
 * Domain: Databases
 * ID: 0530
 */
exports.databasesTool_0530 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0530:', error);
    throw error;
  }
};
