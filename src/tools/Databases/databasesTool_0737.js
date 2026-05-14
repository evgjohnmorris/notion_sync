/**
 * Generated Tool: databasesTool_0737
 * Domain: Databases
 * ID: 0737
 */
exports.databasesTool_0737 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0737:', error);
    throw error;
  }
};
