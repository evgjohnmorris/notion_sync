/**
 * Generated Tool: databasesTool_0203
 * Domain: Databases
 * ID: 0203
 */
exports.databasesTool_0203 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0203:', error);
    throw error;
  }
};
