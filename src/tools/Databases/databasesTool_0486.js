/**
 * Generated Tool: databasesTool_0486
 * Domain: Databases
 * ID: 0486
 */
exports.databasesTool_0486 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0486:', error);
    throw error;
  }
};
